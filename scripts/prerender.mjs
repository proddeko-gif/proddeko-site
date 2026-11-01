
import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const routes = [
  "/",
  "/qui-sommes-nous/",
  "/programmes/",
  "/projets/",
  "/impact/",
  "/gouvernance/",
  "/partenaires/",
  "/contact/",
];

const port = 4179;
const baseURL = `http://127.0.0.1:${port}`;

const server = spawn(
  "node",
  [
    "node_modules/vite/bin/vite.js",
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    String(port),
    "--strictPort",
  ],
  { stdio: "inherit" }
);

let browser;

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt++) {
    if (server.exitCode !== null) {
      throw new Error("Le serveur Vite s'est arrêté.");
    }

    try {
      const response = await fetch(baseURL);
      if (response.ok) return;
    } catch {
      // Le serveur démarre encore.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error("Le serveur Vite ne répond pas.");
}

try {
  await waitForServer();

  browser = await chromium.launch({ headless: true });

  for (const route of routes) {
    const page = await browser.newPage();

    try {
      await page.goto(`${baseURL}${route}`, {
        waitUntil: "networkidle",
      });

      await page.waitForFunction(() => {
        const canonical = document.querySelector(
          'link[rel="canonical"]'
        );

        return (
          document.querySelector("#root")?.children.length > 0 &&
          canonical?.href ===
            `https://proddeko.online${window.location.pathname}`
        );
      });

      const title = await page.title();
      const html = await page.content();

      const directory = join(
        "dist",
        route.replace(/^\/|\/$/g, "")
      );

      await mkdir(directory, { recursive: true });

      const output = join(directory, "index.html");

      await writeFile(output, html, "utf8");

      console.log(`Prérendu : ${route} — ${title}`);
    } finally {
      await page.close();
    }
  }

  console.log("Prérendu des huit pages terminé.");
} catch (error) {
  console.error("Échec du prérendu :", error);
  process.exitCode = 1;
} finally {
  if (browser) await browser.close();
  server.kill();
}
