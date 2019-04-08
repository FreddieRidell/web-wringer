# Web Wringer
> A dead simple [webring] tool

## Create a new Web Ring

1. Fork this repo
2. Update `webring.json` with your sites.
3. Update `now.json` with your domain name
4. (optional) Update `public/styles.css` to theme your site
5. Sign up to [now]
6. Run `npx now` in your forked project to deploy your web ring
7. (optional) Make a pr to add your new webring to [webwringer.com] 🙂

I've already created a web ring based on this template [here][personal-sites-ring]

## Add a Site to an Existing Web Ring
Once your new web ring is setup (e.g at `boat-enthusiasts.com`), it's easy to add new sites:
1. `big-boat-fan.org` wants to join the web ring
2. Add `big-boat-fan.org` to your `webring.json` file
3. Add three links to `big-boat-fan.org`:
   1. `boat-enthusiasts.com/prev`
   2. `boat-enthusiasts.com/rand`
   3. `boat-enthusiasts.com/next`
   4. (optional) `boat-enthusiasts.com` to link to the ring homepage
4. These hyperlinks will automatically take you to the next page in the ring

[now]: https://zeit.co/now
[webring]: https://en.wikipedia.org/wiki/Webring
[webwringer.com]: https://webwringer.com
[personal-sites-ring]: https://personal-sites-web-ring.freddieridell.now.sh/
