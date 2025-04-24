import { ResponseSuccess, ResponsePagination, ResponsePreviosMessage } from 'src/interface/response';

class BaseResponse {
  _success(message: string, data?: any): ResponseSuccess {
    return {
      status: 'Success',
      message: message,
      data: data || {},
    };
  }

  _prevMessage(message: string, conversation_id:number, total, data?: any): ResponsePreviosMessage {
    return {
      status: 'Success',
      message: message,
      data: data || {},
     total : total,
      conversation_id : conversation_id

    };
  }

  _pagination(
    message: string,
    data: any,
    totalData: number,
    page: number,
    pageSize: number,
  ): ResponsePagination {
    return {
      status: 'Success',
      message: message,
      data: data,
      pagination: {
        total: totalData,
        page: page,
        total_page: Math.ceil(totalData / pageSize),
        pageSize: pageSize,
      },
    };
  }q
}

export default BaseResponse;
