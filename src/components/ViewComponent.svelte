<script lang="ts">

import { type SvelteWrapperProps } from "@visuallyjs/browser-ui-svelte"
const {
    data, model, vertex
}:SvelteWrapperProps = $props()

function deleteView(e: MouseEvent) {
    e.stopPropagation()
    model.removeNode(vertex)
}

function editView(e: MouseEvent) {
    e.stopPropagation()
    model.setSelection(vertex)
}
</script>

<div class="vjs-schema-view vjs-schema-element">
        <div class="vjs-schema-element-name">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="vjs-schema-view-delete vjs-schema-delete vjs-schema-delete-vertex" title="Delete view" onclick={deleteView}></div>
            <span>{data.name}</span>
            <div class="vjs-schema-buttons">
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="vjs-schema-edit-name vjs-schema-edit" title="Edit view" onclick={editView}></div>
            </div>
        </div>
        <div class="vjs-schema-view-details">{data.query}</div>
</div>
