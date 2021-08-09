import { VideoInfo } from '@centrual/geyt_api_client';

export interface PlaylistItemProps
  extends Partial<Omit<HTMLDivElement, 'onClick' | 'keyPress' | 'role' | 'tabIndex'>>
{
  video: VideoInfo;
  active?: boolean;
  onClick?: (videoId: string) => void;
}
