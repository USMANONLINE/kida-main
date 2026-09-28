export interface KeyPair {
  name: string;
  type: string;
}

export interface TableKeyPairData extends KeyPair {
  description: string;
}

export interface HttpMockReq {
  title: string;
  method: string;
  path: string;
  docs: string;
  reqHeader: TableKeyPairData;
  respHeader: TableKeyPairData;
  pathVariable: TableKeyPairData;
  queryParam: TableKeyPairData;
  reqBody: TableKeyPairData;
  respBody: TableKeyPairData;
  setting: KeyPair;
}
