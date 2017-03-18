export const PUSH_IMAGE = 'PUSH_IMAGE';

export function pushImage(image) {
    return { type: PUSH_IMAGE, image };
}