# Modest Grind Sessions
# [ModestGrinds](https://modest-grind.herokuapp.com/)
This is an app for tracking grind information in the mmo black desert online.

  * [MVP List](https://github.com/Run5/Capstone/wiki/MVP-list)
  * [Schema](https://github.com/Run5/Capstone/wiki/Schema)
  * [User Stories](https://github.com/Run5/Capstone/wiki/User-Stories)
### Database Schema
![dbdiagram](https://user-images.githubusercontent.com/33680646/128742381-4ad64feb-4c7e-4de1-85b2-dc69947a4431.png)

### My Characters
![myCharactersPage](https://user-images.githubusercontent.com/33680646/128742450-b00a0ece-3dff-4c0b-b2c2-31170e2d8b8b.jpg)

### Grind Sessions
![grindSessions](https://user-images.githubusercontent.com/33680646/128742466-819b90c8-09c0-4ef7-8d47-71c9ab0ae02d.jpg)

 ### Technologies Used
 * JavaScript
 * Flask
 * Postgresql
 * python
 * Heroku
 * Reactjs and Redux
 * CSS

 ### Key Features
   * Users can create, edit, view and delete characters on their profile page.
   * Users can create, edit, view and delete grind sessions for specific locations. If characters exist for the user the grind form can dynamically pull character info to populate the form.

 ### Brief Code Snippet
  * The code below dynamically changes the grind form based on if characters exist for the user
  ```javascript
   {(Object.values(characters).length && !grindId) ? (
      <div className='grindform-input character-input'>
         <label>Character:</label>
         <select
            type='select'
            name='character'
            onChange={updateCharacter}
            value={charValue}
         >
         {Object.values(characters).map((character) => {
            return (
            <option value={`${character.id}`}>{character.name}</option>
            )
         })}
         </select>
      </div>
      ) : (
      <>
         <div className='grindform-input class-input'>
            <label>Class:</label>
            <select
            type='select'
            name='class'
            onChange={updateCharClass}
            value={charClass}
            >
            <option value="Warrior">Warrior</option>
            <option value="Ranger">Ranger</option>
            <option value="Sorceress">Sorceress</option>
            <option value="Berserker">Berserker</option>
            <option value="Tamer">Tamer</option>
            <option value="Musa">Musa</option>
            <option value="Maehwa">Maehwa</option>
            <option value="Valkyrie">Valkyrie</option>
            <option value="Kunoichi">Kunoichi</option>
            <option value="Ninja">Ninja</option>
            <option value="Wizard">Wizard</option>
            <option value="Witch">Witch</option>
            <option value="Dark Knight">Dark Knight</option>
            <option value="Striker">Striker</option>
            <option value="Mystic">Mystic</option>
            <option value="Archer">Archer</option>
            <option value="Lahn">Lahn</option>
            <option value="Shai">Shai</option>
            <option value="Guardian">Guardian</option>
            <option value="Hashashin">Hashashin</option>
            <option value="Nova">Nova</option>
            <option value="Sage">Sage</option>
            <option value="Corsair">Corsair</option>
            </select>
         </div>
         <div className='grindform-input'>
            <input
            type='number'
            name='AP'
            onChange={updateAP}
            value={AP}
            placeholder='AP'
            ></input>
         </div>
         <div className='grindform-input'>
            <input
            type='number'
            name='DP'
            onChange={updateDP}
            value={DP}
            placeholder='DP'
            ></input>
         </div>
      </>
   )}
  ```
# Developer

 **Chase Brashear**
  * https://github.com/run5
