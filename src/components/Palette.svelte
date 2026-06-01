<script lang="ts">
import { PaletteComponent } from "@visuallyjs/browser-ui-svelte";
import { PALETTE_MODE_TAP } from "@visuallyjs/browser-ui";
import { TABLE } from "../constants";

function dataGenerator (el: HTMLElement) {
    const type = el.getAttribute("data-vjs-type"),
        base: any = {
            name:el.getAttribute("data-vjs-type"),
            type
        };

    if (type === TABLE) {
        base.columns = []
    } else {
        base.query =''
    }

    return base
}
</script>

<PaletteComponent
        className="vjs-schema-palette"
        mode={PALETTE_MODE_TAP}
        selectAfterAdd={true}
        {dataGenerator}>

    <div class="vjs-schema-palette-item" data-vjs-type="table">Add Table</div>
    <div class="vjs-schema-palette-item" data-vjs-type="view">Add View</div>

</PaletteComponent>
