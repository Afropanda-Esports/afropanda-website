/**
 * Maps `imageKey` values from JSON CMS files to bundled asset URLs.
 * When adding media: import the file here and register the key.
 */
import workshop from "../assets/workshop.jpg";
import fifa from "../assets/fifa.jpg";
import cod from "../assets/cod.jpg";
import win from "../assets/win.jpg";
import gaming from "../assets/gaming.png";
import ergo from "../assets/Products/ergo.png";
import mx from "../assets/Products/mx.png";
import mxMech from "../assets/Products/mx-mec.png";

const registry: Record<string, string> = {
  workshop,
  fifa,
  cod,
  win,
  gaming,
  ergo,
  mx,
  mxMech,
};

export function resolveImageKey(key: string): string {
  const url = registry[key];
  if (!url) {
    console.warn(`Unknown imageKey: ${key}`);
    return win;
  }
  return url;
}
