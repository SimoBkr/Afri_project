import React, { useContext } from 'react';
import '../ExplorerSection.css'
import { ContextLogistics } from '../../../../contexts/ContextLogistics';

function FWL_Left() {

    const context = useContext(ContextLogistics);

    const handleChangeTypesOfContainers = (evt) => {
        context.setstateFWL({
            ...context.stateFWL,
            TypesOfContainers: evt.target.value
        })
    }

    return (
        <div className="Container">
            <h3 className="name">Wagon Type</h3>
            <hr className="hr2tr" />
            <div className="custominp input-group-prepend">
                <div class="form-check margin_left_fwl">
                    <input class="form-check-input" type="radio" name="Standard1" id="Standard11" value="ST20" onChange={handleChangeTypesOfContainers}
                        checked={context.stateFWL.TypesOfContainers === "ST20"} />
                    <label class="form-check-label text_typesOfContainers" for="Standard11">
                        20° Standard
                    </label>
                </div>
            </div>
            <div className="custominp input-group-prepend">
                <div class="form-check margin_left_fwl">
                    <input class="form-check-input" type="radio" name="Standard2" id="Standard21" value="ST40" onChange={handleChangeTypesOfContainers}
                        checked={context.stateFWL.TypesOfContainers === "ST40"} />
                    <label class="form-check-label text_typesOfContainers" for="Standard21">
                        40° Standard
                    </label>
                </div>
            </div>
            <div className="custominp input-group-prepend">
                <div class="form-check margin_left_fwl">
                    <input class="form-check-input" type="radio" name="HighCube1" id="HighCube11" value="HQ40" onChange={handleChangeTypesOfContainers}
                        checked={context.stateFWL.TypesOfContainers === "HQ40"} />
                    <label class="form-check-label text_typesOfContainers" for="HighCube11">
                        40° High Cube
                    </label>
                </div>
            </div>
            <div className="custominp input-group-prepend">
                <div class="form-check margin_left_fwl">
                    <input class="form-check-input" type="radio" name="Refrigerated1" id="Refrigerated11" value="REF20" onChange={handleChangeTypesOfContainers}
                        checked={context.stateFWL.TypesOfContainers === "REF20"} />
                    <label class="form-check-label text_typesOfContainers" for="Refrigerated11">
                        20° Refrigerated
                    </label>
                </div>
            </div>
            <div className="custominp input-group-prepend">
                <div class="form-check margin_left_fwl">
                    <input class="form-check-input" type="radio" name="Refrigerated2" id="Refrigerated21" value="REF40" onChange={handleChangeTypesOfContainers}
                        checked={context.stateFWL.TypesOfContainers === "REF40"} />
                    <label class="form-check-label text_typesOfContainers" for="Refrigerated21">
                        40° Refrigerated
                    </label>
                </div>
            </div>
            <div className="custominp input-group-prepend">
                <div class="form-check margin_left_fwl">
                    <input class="form-check-input" type="radio" name="HighCube2" id="HighCube21" value="HQ45" onChange={handleChangeTypesOfContainers}
                        checked={context.stateFWL.TypesOfContainers === "HQ45"} />
                    <label class="form-check-label text_typesOfContainers" for="HighCube21">
                        45° High Cube
                    </label>
                </div>
            </div>

        </div>
    )
}

export default FWL_Left;