import alt from '../alt';

class CreateCharacterSheetActions {
  constructor() {
    this.generateActions(
      'createCharacterSuccess',
      'createCharacterFail',
      'updateName',
      'updateGender',
      'invalidName',
      'invalidGender'
    );
  }

  createCharacterSheet(name, gender) {
    $.ajax({
      type: 'POST',
      url: '/api/characterSheets',
      data: { name: name, gender: gender }
    })
      .done((data) => {
        this.actions.createCharacterSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.createCharacterFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(CreateCharacterSheetActions);