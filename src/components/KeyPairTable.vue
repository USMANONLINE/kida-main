<template>
  <q-markup-table flat>
    <thead>
      <tr>
        <th align="left">Name</th>
        <th align="left">Type</th>
        <th align="left">Description</th>
        <th align="center">Action</th>
      </tr>
    </thead>
    <tbody v-for="(config, index) in props.data">
      <tr>
        <td>
          <q-input v-model.trim="config.name" outlined dense />
        </td>
        <td>
          <q-select v-model="config.type" outlined dense />
        </td>
        <td>
          <q-input v-model="config.description" outlined dense />
        </td>
        <td align="center">
          <q-btn
            v-if="data.length - index === 1"
            icon="add"
            color="positive"
            @click="addNewRow"
            flat
            round
            dense
          />
          <q-btn
            icon="delete"
            color="negative"
            @click="deleteRow(index)"
            flat
            round
            dense
          />
        </td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script setup lang="ts">
import { TableKeyPairData } from "@/types/Fields";

const defaultTableKeyPairRow = {
  name: "",
  type: "string",
  description: ""
};
const props = defineProps({ data: Array<TableKeyPairData> });

function addNewRow() {
  props.data?.push(defaultTableKeyPairRow);
}

function deleteRow(index: number) {
  props.data?.splice(index, 1);
}
</script>
