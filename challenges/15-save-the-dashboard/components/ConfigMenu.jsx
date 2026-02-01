import React from "react"
import ConfigButton from "./ConfigButton"

export default function ConfigMenu({ stateProps, changeHandler, save }) {
    const { widgetConfig, setWidgetConfig, DEFAULT_CONFIG } = stateProps

    return (
        <div className="configuration-menu">
            {widgetConfig.map(widget => (
                <ConfigButton
                    key={widget.name}
                    name={widget.name}
                    checked={widget.selected}
                    changeHandler={changeHandler}
                />
            ))}
            <button className="push-button" onClick={() => setWidgetConfig(DEFAULT_CONFIG)}>
                Reset
            </button>
            <button className="push-button" onClick={save}>
                Save
            </button>
        </div>
    )
}