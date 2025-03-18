import { Injectable } from '@angular/core';
import type { AssetDocument, AssetImage} from '@constants/assets.constants';
import { AssetFolder, ASSETS_ROOT } from '@constants/assets.constants';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  getImageUrl = (image: AssetImage) => `${ASSETS_ROOT}/${AssetFolder.Images}/${image}`;

  getDocumentUrl = (document: AssetDocument) => `${ASSETS_ROOT}/${AssetFolder.Documents}/${document}`;
}
