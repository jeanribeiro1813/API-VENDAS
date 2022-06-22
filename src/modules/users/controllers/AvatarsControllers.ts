import { Request, Response } from 'express';
import UpdateAvatarsService from '../services/UpdateAvatarsService';

export default class UserAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateAvatar = new UpdateAvatarsService();

    const user = updateAvatar.execute({
      user_id: req.user.id,
      avatarFilename: req.file?.filename as string,
    });

    return res.json(user);
  }
}
