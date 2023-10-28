import * as libClassValidator from "class-validator";
import { ClassValidatorField } from "../../class-validator-field";

class StubClassValidatorFields extends ClassValidatorField<{
  field: string
}>{ }



describe('ClassValidatorFields Unit tests', () => {


  it('Should initialize errors and validateData variables with null', () => {
    const sut = new StubClassValidatorFields()

    expect(sut.erros).toBeNull()
    expect(sut.validatedData).toBeNull()
  })


  it('Should validate with errors', () => {

    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync')

    spyValidateSync.mockReturnValue([
      { property: 'field', constraints: { isRequired: 'test error' } }
    ])

    const sut = new StubClassValidatorFields()

    expect(sut.validate(null)).toBeFalsy()
    expect(spyValidateSync).toHaveBeenCalled()
    expect(sut.validatedData).toBeNull()
    expect(sut.erros).toStrictEqual({ field: ['test error'] })
  })

})
