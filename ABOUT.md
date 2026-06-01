### Summary
This demo shows a database schema builder. Users can define tables, columns, and relationships using an interactive canvas.

### Components Used
- `SurfaceProvider`: Context provider.
- `SurfaceComponent`: The main canvas for the schema.
- `ControlsComponent`: UI for canvas interaction.
- `MiniviewComponent`: Overview map.
- `PaletteComponent`: (In `components/Palette.svelte`) Draggable palette for adding new tables.
- `InspectorComponent`: (In `components/Inspector.svelte`) For editing table and column properties.

### Component Options
#### `SurfaceComponent`
- `renderOptions`: Defines the visual style of tables and connections.
- `modelOptions`: Configures the data model for schema entities.
- `viewOptions`: Configures view-related settings.
- `url`: Path to the initial schema dataset.

### Stylesheet Requirement
`visuallyjs.css` is required for the components to function correctly.

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
```
