import React from "react";
import { Button, Form, Input } from "antd";
import { Controller, UseFormReturn } from "react-hook-form";
import { CreateOrganizationBodyType } from "@/schemaValidations/organization";

interface OrganizationFormFieldsProps {
  formMethods: UseFormReturn<CreateOrganizationBodyType>; // Nhận tất cả các method của react-hook-form
  onSubmit: (values: CreateOrganizationBodyType) => void;
  handleCancel: () => void;
  editingData?: CreateOrganizationBodyType | null;
}

const OrganizationFormFields: React.FC<OrganizationFormFieldsProps> = ({
  formMethods,
  onSubmit,
  handleCancel,
  // editingData,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  return (
    <Form onFinish={handleSubmit(onSubmit)} labelCol={{ span: 7 }}>
      <Form.Item
        label="Tên tổ chức"
        validateStatus={errors.name ? "error" : ""}
        help={errors.name?.message}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item
        label="Số điện thoại"
        validateStatus={errors.phone_number ? "error" : ""}
        help={errors.phone_number?.message}
      >
        <Controller
          name="phone_number"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item
        label="Email"
        validateStatus={errors.email ? "error" : ""}
        help={errors.email?.message}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item
        label="Đường"
        validateStatus={errors.address?.street ? "error" : ""}
        help={errors.address?.street?.message}
      >
        <Controller
          name="address.street"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item
        label="Căn hộ"
        validateStatus={errors.address?.appartment ? "error" : ""}
        help={errors.address?.appartment?.message}
      >
        <Controller
          name="address.appartment"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item
        label="Quận/Huyện"
        validateStatus={errors.address?.district ? "error" : ""}
        help={errors.address?.district?.message}
      >
        <Controller
          name="address.district"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item
        label="Thành phố"
        validateStatus={errors.address?.city ? "error" : ""}
        help={errors.address?.city?.message}
      >
        <Controller
          name="address.city"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item
        label="Quốc gia"
        validateStatus={errors.address?.country ? "error" : ""}
        help={errors.address?.country?.message}
      >
        <Controller
          name="address.country"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item className="text-right">
        <Button className="mr-2" onClick={handleCancel}>
          Hủy
        </Button>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrganizationFormFields;
