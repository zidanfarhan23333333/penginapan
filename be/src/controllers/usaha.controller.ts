import { Request, Response } from "express";
import { getAllUsaha, getUsahaById } from "../services/usaha.service";
import { v4 as uuidv4 } from "uuid";

export const getUsaha = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (id) {
    const usaha = await getUsahaById(id);
    if (usaha) {
      return res.status(200).send({
        status: true,
        status_code: 200,
        message: "Get detail data usaha successfully",
        data: usaha,
      });
    } else {
      return res.status(404).send({
        status: false,
        status_code: 404,
        message: "No usaha posted",
        data: {},
      });
    }
  } else {
    try {
      const usaha = await getAllUsaha();
      if (Array.isArray(usaha) && usaha.length > 0) {
        return res.status(200).send({
          status: true,
          status_code: 200,
          message: "Get data usaha success",
          data: usaha,
        });
      } else {
        return res.status(200).send({
          status: true,
          status_code: 200,
          message: "No usaha posted",
          data: {},
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: false,
        status_code: 500,
        message: "Internal Server Error",
        data: {},
      });
    }
  }
};

// export const createUsaha = async (req: Request, res: Response) => {
//   const chat_id = uuidv4();
//   const { user_id, community_id, chat, name } = req.body;

//   if (!user_id || !community_id || !chat || !name) {
//     return res.status(400).send({
//       status: false,
//       status_code: 400,
//       message: "chat field are required",
//     });
//   }

//   try {
//     const userImage = await getUserImage(user_id);
//     const chatData = {
//       chat_id,
//       user_id,
//       community_id,
//       chat,
//       name,
//       image: userImage,
//     };
//     await insertChat(chatData);
//     return res.status(200).json({
//       status: true,
//       status_code: 200,
//       message: "created chat successfully",
//       data: chatData,
//     });
//   } catch (error: any) {
//     return res.status(422).send({
//       status: false,
//       status_code: 422,
//       message: error.message,
//     });
//   }
// };

// export const getChatByCommunity = async (req: Request, res: Response) => {
//   const community_id = req.params.community_id;

//   const chat = await getChatByCommunityId(community_id);
//   if (Array.isArray(chat) && chat.length > 0) {
//     return res.status(200).send({
//       status: true,
//       status_code: 200,
//       message: "Get data chat success",
//       data: chat,
//     });
//   } else {
//     return res.status(200).send({
//       status: true,
//       status_code: 200,
//       message: "No chat posted",
//       data: {},
//     });
//   }
// };

// export const deleteChat = async (req: Request, res: Response) => {
//   const id = req.params.id;

//   try {
//     const result = await getChatAndDelete(id);
//     if (result) {
//       res.status(200).json({
//         status: true,
//         status_code: 200,
//         message: "Delete chat successfully",
//       });
//     } else {
//       res.status(404).json({
//         status: false,
//         status_code: 404,
//         message: "Data not found",
//         data: {},
//       });
//     }
//   } catch (error: any) {
//     return res.status(422).send({
//       status: false,
//       status_code: 422,
//       message: error.message,
//     });
//   }
// };
