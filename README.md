# Build a Kit Prototype

## Proposed User Flow
1. User clicks on 'Build Your Own Kit' link on a pattern product page on the [BAQ Website](https://bonairquiltco.com), which launches the app. The app fetches some data packages from the server for the app to use.
    1. The selected pattern from the server which will be used to load a number of select boxes corresponding to the number of unique fabrics required for the pattern
    2. The list of fabrics available from the store (including inventory levels) and their cost per yard in 1/4 yards.
2. Select boxes for required cuts of fabric will appear on the left. A graphic representation of the quilt will appear on the right, with pre-loaded contrasting colors to signify the number of colorways.
    - Checkboxes to enable backing and binding selection will appear, allowing the user to include backing or binding or both in their custom kit. 
3. As the user begins selecting fabrics, the Quilt View will change to reflect back the user's choices. A price will be updated for the fabric choice for each selected cut, and a tally will be updated on the bottom right below the Quilt View
4. After the user finishes selecting a fabric for each colorway, the 'Create Kit' will be enabled, and the user clicks it.
5. The user is routed to a page (modal?) where she can confirm choices. An 'Edit Kit' button will be available to navigate back to the previous view where the user can modify choices. The 'Add to Cart' button will confirm choices and add the kit to the user's shopping cart as a single item.
    - Icebox: The user can be taken back to the 'Edit Kit' page from the shopping cart
6. Removing the kit from the cart is a destructive action and the user should not be able to do it without receiving a warning that the kit is not recoverable.
7. After checkout, BAQ will receive the user's order including any custom kits. Custom kits will include the pattern and yardages of each fabric chosen as part of the kit.

<u>Notes:</u>
 - To begin building this app for the Shopify Apps ecosystem, I will be following [this article.](https://www.shopify.com/partners/blog/how-to-build-a-shopify-app?utm_source=exacttarget&utm_medium=email&utm_campaign=blog&utm_content=partner_blog-2021-02-25)
 - The app will be built as a [custom](https://shopify.dev/concepts/apps?itcat=partner_blog&itterm=how_to_build_a_shopify_app&shpxid=dc1a3b73-328D-4114-7F83-B672249F8FF6#custom-apps) [embedded](https://shopify.dev/concepts/apps?itcat=partner_blog&itterm=how_to_build_a_shopify_app&shpxid=dc1a3b73-328D-4114-7F83-B672249F8FF6#embedded-apps) app.
 - The hope is to generalize the functionality of the app for use in other retail domains (build a suit, build an outfit, other kitting / bundling opportunities) and make it a [public app.](https://shopify.dev/concepts/apps?itcat=partner_blog&itterm=how_to_build_a_shopify_app&shpxid=dc1a3b73-328D-4114-7F83-B672249F8FF6#public-apps)
 - A quick search of Shopify's App Store reveals that there are kit / bundle options available but none with the level of specificity that would allow a user to create their own kit from a list of dynamically generated fabric requirements and different curated lists of options.
 - For inspiration and to isoloate cases for differentiation, see
   - [prequilt](https://prequilt.com/)
   - [quiltingapps](http://www.quiltingapps.com/)
 - Learn as much as possible about [Polaris.](https://polaris.shopify.com/?itcat=partner_blog&itterm=how_to_build_a_shopify_app)
 - Steps for developing NodeJS app from Shopify Partner Dashboard [here.](https://shopify.dev/tutorials/build-a-shopify-app-with-node-and-react?itcat=partner_blog&itterm=how_to_build_a_shopify_app&shpxid=dc1a3b73-328D-4114-7F83-B672249F8FF6)