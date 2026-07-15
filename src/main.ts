import { mount } from 'svelte'
import "@visuallyjs/browser-ui/css/visuallyjs.css"
import './schema.css'
import App from './App.svelte'

mount(App, {
    target: document.querySelector('.vjs-schema-builder')!,
})
