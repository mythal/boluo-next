/// <reference no-default-lib="true"/>
/// <reference lib="es2020" />
/// <reference lib="WebWorker" />

// bypass "--isolatedModules"
export {};

// see https://github.com/microsoft/TypeScript/issues/11781
const worker = self as unknown as ServiceWorkerGlobalScope & typeof globalThis;

worker.onpush = (event: PushEvent) => {
  const text = event.data?.text() ?? '';
  worker.registration.showNotification('Boluo', { body: text, renotify: true, tag: 'development' });
};
