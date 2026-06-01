<script lang="ts">
import { uuid, Node } from "@visuallyjs/browser-ui"
import { datatypes } from "../definitions";
import { type SvelteWrapperProps } from "@visuallyjs/browser-ui-svelte"

const {
    data, model, vertex
}:SvelteWrapperProps = $props()

function addColumn(e: MouseEvent) {
    // e.stopPropagation()
    model.addNewPort(vertex, "column", {
        id: uuid(),
        name: "new column",
        primaryKey: false,
        datatype: datatypes[0].id
    });
}

function deleteTable(e: MouseEvent) {
    // e.stopPropagation()
    model.removeNode(vertex)
}

function editTable(e: MouseEvent) {
    // e.stopPropagation()
    model.setSelection(vertex)
}

function deleteColumn(e: MouseEvent, columnId: string) {
    // e.stopPropagation()
    model.removePort((vertex as Node), columnId)
}

function editColumn(e: MouseEvent, columnId: string) {
    // e.stopPropagation()
    model.setSelection((vertex as Node).getPort(columnId))
}
</script>

<div class="vjs-schema-table vjs-schema-element">
    <div class="vjs-schema-element-name">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="vjs-schema-delete vjs-schema-delete-vertex" title="Click to delete" onclick={deleteTable}></div>
        <span>{data.name}</span>
        <div class="vjs-schema-buttons">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="vjs-schema-edit-name vjs-schema-edit" title="Click to edit table name" onclick={editTable}></div>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="vjs-schema-new-column vjs-schema-add" title="Click to add a new column" onclick={addColumn}></div>
        </div>
    </div>
    <div class="vjs-schema-table-columns">
        {#each data.columns as c (c.id)}
            <div class="vjs-schema-table-column" data-type={c.datatype} data-primary-key={(c.primaryKey || false).toString()} data-vjs-port={c.id} data-vjs-scope={c.datatype} data-vjs-source="true" data-vjs-target="true">
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="vjs-schema-table-column-delete vjs-schema-delete" onclick={(e) => deleteColumn(e, c.id)}></div>
                <div><span>{c.name}</span></div>
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div class="vjs-schema-table-column-edit vjs-schema-edit" onclick={(e) => editColumn(e, c.id)}></div>
            </div>
        {/each}
    </div>
</div>
