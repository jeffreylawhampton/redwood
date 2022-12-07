import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ContainerForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.container?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.container?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.container?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="roomId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Room id
        </Label>

        <NumberField
          name="roomId"
          defaultValue={props.container?.roomId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="roomId" className="rw-field-error" />

        <Label
          name="parentContainerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Parent container id
        </Label>

        <NumberField
          name="parentContainerId"
          defaultValue={props.container?.parentContainerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="parentContainerId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ContainerForm
