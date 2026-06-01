<script lang="ts">
import {
    SurfaceProvider,
    SurfaceComponent,
    ControlsComponent,
    MiniviewComponent
} from "@visuallyjs/browser-ui-svelte"

import renderOptions from './render-options'
import viewOptions from './view-options'
import modelOptions from './model-options'

import SchemaInspector from "./components/Inspector.svelte"
import SchemaPalette from "./components/Palette.svelte"

let { url = "/schema-1.json" } = $props<{ url?: string }>();

</script>

<SurfaceProvider>
    <div class="vjs-schema-builder-canvas">
        <SurfaceComponent {renderOptions} {modelOptions} {viewOptions} {url}>
            <ControlsComponent/>
        </SurfaceComponent>
    </div>
    <div class="vjs-schema-builder-rhs">
        <MiniviewComponent/>
        <SchemaPalette/>
        <SchemaInspector/>
    </div>
</SurfaceProvider>
