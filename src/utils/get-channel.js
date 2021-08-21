import { getVideo } from './get-video'
import { getDeepestChildContent } from './get-deepest-child-content'
import { getChannelByVideo } from './get-channel-by-video'

/**
 * @param {HTMLDivElement} element youtube compactVideoRenderer
 * @typedef {string} Id channel id
 * @typedef {string} Name channel name
 * @returns {{Id,Name}} channel object
 */
export async function getChannel (element) {

    const id = getVideo (element)
    const channelByVideo = await getChannelByVideo ()
    const channelId = channelByVideo[id]
    const parent = element.getElementsByTagName ('ytd-channel-name')[0]
    const name = getDeepestChildContent (parent)
    const object = {}

    object[channelId] = name

    return object

}