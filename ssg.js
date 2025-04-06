import { access, cp, mkdir, readFile, writeFile } from "fs/promises";


const template = await readFile("./dist/Client/index.html", "utf-8");
const { render } = await import("./dist/Server/entry-server.js");
const rendered = await render();
const html = template
    .replaceAll("/assets", "./assets")
    .replace("<!--app-body-->", rendered.html);
if (await access("./dist/ssg").then(() => false).catch(() => true))
    await mkdir("./dist/ssg");
await cp("./dist/Client/assets", "./dist/ssg/assets", { recursive: true });
await writeFile("./dist/ssg/index.html", html, "utf-8");
console.log("SSG generated at ./dist/ssg/index.html");