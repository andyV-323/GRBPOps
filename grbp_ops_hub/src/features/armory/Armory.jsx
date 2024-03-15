import React from 'react';
import { EquipmentProvider } from './EquipmentContext';
import { EquipmentSelector } from './EquipmentSelector';
import { WeightCalculator } from './WeightCalculator';
import { UnitToggle } from './UnitToggle';
import { EQUIPMENT } from '../../config/equipment';
import { GUNS } from '../../config/guns';
import { GEAR } from '../../config/gear';
import { ResetButton } from './ResetButton';
import { GunSelector } from './GunSelector';
import { SPECIALITEMS } from '../../config/specialItems';
import { EXPLOSIVES } from '../../config/explosives';
import { ExplosiveSelector } from './ExplosiveSelector';
import { GearSelector } from './GearSelector';
import { SpecialItemsSelector } from './SpecialItemsSelector';

function Armory() {
  return (
    <div className="armory-container">
      <h1 style={{ fontSize: '30px' }}>Weight Calculator</h1>
      <section className="loadout">
        <EquipmentProvider>
          <section className="loadout-selection">
            <dl>
              <dd>
                <h1 style={{ fontSize: '15px' }}>&emsp;Equipment&emsp;</h1>
                {Object.keys(EQUIPMENT).map((item) => (
                  <EquipmentSelector
                    key={item}
                    item={item}
                    weight={EQUIPMENT[item]}
                  />
                ))}
              </dd>
            </dl>

            <dl>
              <dd>
                <h1 style={{ fontSize: '15px' }}>&emsp;Weapons&emsp;</h1>
                {Object.keys(GUNS).map((item) => (
                  <GunSelector key={item} item={item} weight={GUNS[item]} />
                ))}
              </dd>
            </dl>

            <dl>
              <dd>
                <h1 style={{ fontSize: '15px' }}>
                  &emsp;&emsp;&emsp;Gear&emsp;&emsp;&emsp;
                </h1>
                {Object.keys(GEAR).map((item) => (
                  <GearSelector key={item} item={item} weight={GEAR[item]} />
                ))}
              </dd>
            </dl>

            <dl>
              <dd>
                <h1 style={{ fontSize: '15px' }}>Special Items</h1>
                {Object.keys(SPECIALITEMS).map((item) => (
                  <SpecialItemsSelector
                    key={item}
                    item={item}
                    weight={SPECIALITEMS[item]}
                  />
                ))}
              </dd>
            </dl>

            <dl>
              <dd>
                <h1 style={{ fontSize: '15px' }}>&emsp;Explosives&emsp;</h1>
                {Object.keys(EXPLOSIVES).map((item) => (
                  <ExplosiveSelector
                    key={item}
                    item={item}
                    weight={EXPLOSIVES[item]}
                  />
                ))}
              </dd>
            </dl>
          </section>
          <div className="reset-btn-container">
            <section className="reset-btn">
              <dl>
                <dd>
                  <UnitToggle />
                  <ResetButton />
                  <WeightCalculator
                    equipmentList={{
                      ...EQUIPMENT,
                      ...GUNS,
                      ...GEAR,
                      ...SPECIALITEMS,
                      ...EXPLOSIVES,
                    }}
                  />
                </dd>
              </dl>
            </section>
          </div>
        </EquipmentProvider>
      </section>
    </div>
  );
}

export default Armory;
