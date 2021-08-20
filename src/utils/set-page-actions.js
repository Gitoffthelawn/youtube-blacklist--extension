import { appendCloseButtons } from './append-close-buttons'
import { purgePage } from './purge-page'
import { INTERVAL } from './constants'

let interval = undefined

/**
 * @description append close buttons & purge blacklisted videos
 *      this function gets re-executed when href changes
 */
export function setPageActions () {

    if (interval) clearTimeout (interval)

    interval = setInterval (async () => {

        await appendCloseButtons ()

        await purgePage ()

    }, INTERVAL)

}