
# Women of hip-hop


Backend link: https://women-of-hip-hop.herokuapp.com/

Frontend link: !(wohh.netlify.app)


## Pages

![alt text](/public/wohh-map.png)

### Landing page

Route: `/`

Allows user to sign up or login.

The rest of the pages are protected so this is the only page one can access without logging in.
<br/>


### Home

Route: `/`

Redirects user to main features.

The Navbar, present on all pages except the landing page, can redirect to home, profile, or log out the user.
<br/>


### Shuffle

Route: `/shuffle`

Presents the user with a random artist's info and plays her flag song.

User can add the artist to their favorites and shuffle again.
<br/>


### User Favorites

Route: `/favorites`

Shows a list of the user's favortie artists and allows them to remove some.
<br/>


### User Profile

Route: `/profile`

Redirects the user to their favorites, the albums they created, or the artists they created.

Allows the user to change their password or profile picture, and to delete their account. 
<br/>


### My Artists

Route: `/myArtists`

Shows a list of all the artists the user has created.

Allows the user to add, update, or delete artists from the database. They can only update or delete artists they've created.
<br/>



### My Albums

Route: `/myAlbums`

Shows a list of all the albums the user has created.

Allows the user to add, update, or delete albums from the database. They can only update or delete albums they've created.
<br/>


## Components

- Navbar
- Pagecard: a card showing a page's info and redirecting there.
- *forms: several forms for different actions.
- Album: a card showing an album's info and possible actions.
- Artist: a card showing an artist's info and possible actions.
- Favorite: a card showing a favorited artist's info and possible actions.
<br/>

## Context

All pages except the landing page require the user to be logged in. The AuthContext allows us to perform the required checks before redirecting. 
