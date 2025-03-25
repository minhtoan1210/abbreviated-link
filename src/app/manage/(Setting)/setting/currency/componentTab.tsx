"use client";

import { Edit, Trash2 } from "lucide-react";
import { Button, Input, Popconfirm, Table } from "antd";
import React, { useRef, useState } from "react";
import {
  useGetListCurrency,
  useUpdateCurrencyMutation,
} from "@/queries/useCurrency";

export default function ComponentTable() {
  const inputCurrency: any = useRef();
  const [currencyId, setCurrencyId] = useState("");
  const { data: getListCurrency } = useGetListCurrency(currencyId);
  const updateCurrencyMutation = useUpdateCurrencyMutation();
  const handleInputCurrency = async (record: any) => {
    await updateCurrencyMutation.mutateAsync({
      body: {
        name: inputCurrency.current.input.value,
        value: record.value,
      },
      id: record._id,
    });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <div className="flex space-x-3">
          <Popconfirm
            title={
              <>
                <Input ref={inputCurrency} />
              </>
            }
            onConfirm={async () => handleInputCurrency(record)}
            okText="Save"
            cancelText="Hủy"
          >
            <Button
              type="text"
              icon={<Edit size={18} className="text-blue-500" />}
              // onClick={() => setId({ type: "update", id: record._id })}
            />
          </Popconfirm>

          <Popconfirm
            title="Bạn có chắc muốn xóa?"
            onConfirm={async () => {
              //   await deleteOrganizationMutation.mutateAsync(record._id);
            }}
            okText="Xóa"
            cancelText="Hủy"
          >
            <Button
              type="text"
              icon={<Trash2 size={18} className="text-red-500" />}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <Table dataSource={getListCurrency?.data} columns={columns} rowKey="_id" />
  );
}
