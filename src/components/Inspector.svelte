<script lang="ts">
import { isNode, isPort } from "@visuallyjs/browser-ui"
import { InspectorComponent } from "@visuallyjs/browser-ui-svelte";
import { datatypes, cardinalities } from "../definitions";
import {
    PROPERTY_CARDINALITY,
    TABLE, VIEW, COLUMN, RELATIONSHIP
} from "../constants";

let current = $state(null)
let currentType = $derived(current == null ? null : isNode(current) ? current.data.type : isPort(current) ? COLUMN : RELATIONSHIP)

</script>

<InspectorComponent bind:current={current}>
    {#if currentType === TABLE}
        <div>Table Name</div>
        <input type="text" vjs-att="name" vjs-focus="true"/>
    {:else}
        {#if currentType === VIEW}
            <div>View Name</div>
            <input type="text" vjs-att="name" vjs-focus="true"/>
            <div>Query</div>
            <textarea vjs-att="query" rows="10"></textarea>
        {:else}
            {#if currentType === COLUMN}
                <div>Name</div>
                <input type="text" vjs-att="name" vjs-focus="true"/>
                <div>Datatype</div>
                {#each datatypes as d (d.id)}
                    <label>
                        <input type="radio" vjs-att="datatype" name="datatype" value={d.id}/>{d.description}
                    </label>
                {/each}
            {:else}
                {#if currentType === RELATIONSHIP}
                    <div>Cardinality</div>
                    {#each cardinalities as c (c.id)}
                        <label>
                            <input type="radio" name={PROPERTY_CARDINALITY} vjs-att={PROPERTY_CARDINALITY} value={c.id}/>{c.name}
                        </label>
                    {/each}
                {/if}
            {/if}
        {/if}
    {/if}
</InspectorComponent>
