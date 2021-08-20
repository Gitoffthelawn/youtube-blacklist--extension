import { appendCloseButtons } from './append-close-buttons'
import { purgePage } from './purge-page'
import { INTERVAL } from './constants'
import { setChannelsByVideoState } from './set-channels-by-video-state'
import { executeOnBlacklistUpdate } from './execute-on-blacklist-update'

let interval = undefined

/**
 * @description append close buttons & purge blacklisted videos
 *      this function gets re-executed when href changes
 */
export async function setPageActions () {

    if (interval) clearTimeout (interval)

    interval = setInterval (async () => {

        await setChannelsByVideoState ()

        await appendCloseButtons ()

        await purgePage ()

    }, INTERVAL)

    executeOnBlacklistUpdate (async () => {

        await purgePage ({ 'force': true })
    
    })

}