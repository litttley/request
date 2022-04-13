// Copyright (c) 2022 aiocat
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { writeText } from "@tauri-apps/api/clipboard";
import { sendNotification } from "./notification";

let clearButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>("#clear-response");
let copyButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>("#copy-response");
let responseTextElement: HTMLTextAreaElement | null = document.querySelector<HTMLTextAreaElement>("#response-text");

clearButton!.onclick = (): void => {
    responseTextElement!.value = "";
};

copyButton!.onclick = (): void => {
    let content: string = responseTextElement!.value;
    writeText(content);
    sendNotification("Body copied to clipboard");
};