export interface ResponseSuccess {
  status: string;
  message: string;
  data?: any;
}

export interface ResponsePagination extends ResponseSuccess {
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    total_page: number;
  };
}


export interface ResponsePreviosMessage extends ResponseSuccess {

  conversation_id:number
  total : number
}