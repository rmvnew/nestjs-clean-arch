

export type FieldsErrors = {
  [field: string]: string[]
}

export interface ValidatorFieldsInterface<PropsValidated> {

  erros: FieldsErrors
  validatedData: PropsValidated
  validate(data: any): boolean

}

