import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ItemForm = (props) => {
  const roomsList = props.item.user.rooms.map((room) => {
    return room.name
  })
  console.log(roomsList)
  const onSubmit = (data) => {
    props.onSave(data, props?.item?.id)
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
          defaultValue={props.item?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.item?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="value"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Value
        </Label>

        <TextField
          name="value"
          defaultValue={props.item?.value}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="value" className="rw-field-error" />

        <Label
          name="serialNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Serial number
        </Label>

        <TextField
          name="serialNumber"
          defaultValue={props.item?.serialNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="serialNumber" className="rw-field-error" />

        <Label
          name="quantity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Quantity
        </Label>

        <TextField
          name="quantity"
          defaultValue={props.item?.quantity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="quantity" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <NumberField
          name="userId"
          defaultValue={props.item?.userId}
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
          defaultValue={props.item?.roomId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="roomId" className="rw-field-error" />

        <Label
          name="containerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Container id
        </Label>

        <NumberField
          name="containerId"
          defaultValue={props.item?.containerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="containerId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ItemForm
