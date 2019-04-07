# Web Wringer
> An easy to setup and use [webring] tool

## Setup a new Web Ring

1. fork this repo
2. update `webring.json` with your sites.
3. update `now.json` with your domain name
4. (optional) update `public/styles.css`
5. signup to [now]
6. `npx now`
7. (optional) make a pr to add your new webring to [webwringer.com] 🙂

## Use the your new Web Ring
1. host your new web ring at `example-web-ring.com`
2. add links from any site to to
   1. `example-web-ring.com/prev`
   2. `example-web-ring.com/next`
   3. `example-web-ring.com/rand`
3. go to `example-web-ring.com` to see a full list of all the sites in the ring

Links to example-web-ring.com will automatically redirect to the correct page when linked to from a page that's in the ring.

[now]: https://zeit.co/now
[webring]: https://en.wikipedia.org/wiki/Webring
[webwringer.com]: https://webwringer.com
