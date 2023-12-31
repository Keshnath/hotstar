import { Request, Response } from "express";
import Channel, { IChannel } from "models/tv/Channels";
const addChannel = async (req: Request, res: Response) => {
  try {
    const { channelName }: IChannel = req.body;
    const isChannel = await Channel.findOne({ channelName: channelName });
    if (isChannel) {
      return res.json({
        message: "Channel already exists",
      });
    } else {
      const channelPoster = req.file?.path;
      await Channel.create({
        channelName,
        channelPoster,
      });
      return res.json({
        message: "Channel created successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "error occured",
    });
  }
};
const getAllChannels = async (req: Request, res: Response) => {
  try {
    const channels = await Channel.find();
    return res.json({
      message: channels,
    });
  } catch (error) {
    return res.status(500).json({
      message: "error occurred",
    });
  }
};
export default {
  addChannel,
  getAllChannels,
};
