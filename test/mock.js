const dataFilecomposants = `<iscontent type="text/html" charset="UTF-8" compact="true"/>
<iscomment>
    Insert a content asset into the page
</iscomment>
<ismodule template="content/content/contentasset"
    name="contentasset"
    attribute="aid"
/>

<iscomment>
    Insert static breadcrumbs into the page.
</iscomment>
<ismodule template="components/breadcrumbs.isml"
    name="breadcrumbs"
    attribute="bctext1"
    attribute="bcurl1"
    attribute="bctext2"
    attribute="bcurl2"
    attribute="bctext3"
    attribute="bcurl3"
/>

<iscomment>
    Provides an easy to exchange flyout renderer

    category         : the category of which the menu flyout will be rendered

</iscomment>
<ismodule template="components/header/categoryflyout.isml"
    name="categoryflyout"
    attribute="category"
/>

<iscomment>
    Provides an easy to display a custom carousel

    category         : the category of which the carousel will be rendered

</iscomment>
<ismodule template="components/categorycarousel.isml"
          name="categorycarousel"
          attribute="categoryid"
/>

<iscomment>
    Creates a product tile with an image, the product name and additional, optional
    information, like pricing, or swatches.

    product         : the product to render the tile for
    showswatches     : check, whether to render the color swatches (default is false)
    showpricing        : check, whether to render the pricing (default is false)
    showpromotion    : check, whether to render the promotional messaging (default is false)
    showaddtocart    : check, whether to render the bouton Add to cart (default is false)
    showrating        : check, whether to render the review rating (default is false)
</iscomment>
<ismodule template="product/producttile"
    name="producttile"
    attribute="product"
    attribute="showswatches"
    attribute="showpricing"
    attribute="showpromotion"
    attribute="showrating"
    attribute="showcompare"
    attribute="showaddtocart"
    attribute="cache"
/>

<ismodule template="content/templates/storietile"
          name="storietile"
          attribute="story"
/>

<iscomment>
    Creates a div containing name value pairs of selected variation attributes values.

    product : the product
</iscomment>
<ismodule template="product/components/displayvariationvalues"
    name="displayvariationvalues"
    attribute="product"
/>

<iscomment>
    Creates a div containing image and id of selected variation attributes values.

    product : the product
</iscomment>
<ismodule template="product/components/displayvariationinfo"
          name="displayvariationinfo"
          attribute="product"
/>

<iscomment>
    Creates a div containing name value pairs of selected option values.

    product : the product
</iscomment>
<ismodule template="product/components/displayoptionvalues"
    name="displayoptionvalues"
    attribute="productlistitem"
/>

<iscomment>
    Creates a div rendering a product line item.
    p_productli : the product line item to render
    P_editable  : boolean indicating if the pli is editable or not
</iscomment>
<ismodule template="product/components/displayliproduct"
    name="displayliproduct"
    attribute="p_productli"
    attribute="p_formli"
    attribute="p_editable"
    attribute="p_hideprice"
    attribute="p_hidepromo"
/>

<iscomment>
    Creates a div rendering a product list item.
    p_productli : the product list item to render
</iscomment>
<ismodule template="product/components/displayproductlistitem"
    name="displayproductlistitem"
    attribute="p_productli"
/>

<iscomment>
    Creates a div rendering product pricing.
    p_productli : the product list item to render
</iscomment>
<ismodule template="product/components/displayproductpricing"
    name="displayproductpricing"
    attribute="p_productli"
/>

<iscomment>
    Creates a div rendering product availability.
    p_productli           : the product list item to render
    p_displayinstock      : a boolean that controls if the 'in stock' message should be rendered.
    p_displaypreorder     : a boolean that controls if the 'pre order' message should be rendered.
    p_displaybackorder    : a boolean that controls if the 'back ordered' message should be rendered.
</iscomment>
<ismodule template="product/components/displayproductavailability"
    name="displayproductavailability"
    attribute="p_productli"
    attribute="p_displayinstock"
    attribute="p_displaypreorder"
    attribute="p_displaybackorder"
/>

<iscomment>
    Creates a grid of product search result hits
    producthits : the product iterator

</iscomment>
<ismodule template="search/productgrid"
    name="productgrid"
    attribute="category"
    attribute="pagingmodel"
/>

<iscomment>
    Creates a hierarchical listing of category refinement values.
</iscomment>
<ismodule template="search/components/categoryrefinementvalues"
    name="categoryrefinementvalues"
    attribute="searchmodel"
    attribute="category"
    attribute="categorypath"
    attribute="categorylevel"
/>

<iscomment>
    Creates a hierarchical listing of folder refinement values.
</iscomment>
<ismodule template="search/components/folderrefinementvalues"
    name="folderrefinementvalues"
    attribute="searchmodel"
    attribute="folder"
    attribute="folderpath"
    attribute="folderlevel"
/>

<iscomment>
    Displays the information about the pagable on the page.
    pagingmodel : the name of the model to use for paging
</iscomment>
<ismodule template="components/paginginformation"
    name="paginginformation"
    attribute="pagingmodel"
    attribute="pageurl"
/>

<iscomment>
    Displays the sorting options of the product search model.
    productsearchmodel : the product search model to use for sorting
</iscomment>
<ismodule template="search/components/productsortingoptions"
    name="productsortingoptions"
    attribute="productsearchmodel"
    attribute="pagingmodel"
    attribute="uniqueid"
/>

<iscomment>
    Creates a paging bar on the page
</iscomment>
<ismodule template = "components/pagingbar"
    name="pagingbar"
    attribute="pageurl"
    attribute="pagingmodel"
/>

<iscomment>
    Display current page if available
</iscomment>
<ismodule template = "components/pagingcurrentpage"
    name="pagingcurrentpage"
    attribute="pageurl"
    attribute="pagingmodel"
/>


<iscomment>
    define reusable address view
    The prefix 'p_' avoids clashes with loop or other variables
</iscomment>
<ismodule template="account/addressbook/miniaddress.isml"
    name="miniaddress"
    attribute="p_address"
    attribute="p_productlist"
/>

<iscomment>
    The locale-specific portion of the miniaddress.isml module
</iscomment>
<ismodule template="account/addressbook/miniaddress_localized.isml"
    name="miniaddress_localized"
    attribute="p_address"
/>

<iscomment>
    The locale-specific portion of the minibillinginfo.isml module
</iscomment>
<ismodule template="checkout/components/minicheckout_address.isml"
    name="minicheckout_address"
    attribute="p_address"
/>

<iscomment>
    define reusable single shipping addresses view
    The prefix 'p_' avoids clashes with loop or other variables
</iscomment>
<ismodule template="checkout/minishippingaddress.isml"
    name="minishippingaddress"
    attribute="p_shipment"
    attribute="p_editable"
    attribute="p_showmethod"
    attribute="p_showpromos"
/>

<iscomment>
    define reusable credit card view
</iscomment>
<ismodule template="account/payment/minicreditcard.isml"
    name="minicreditcard"
    attribute="card"
    attribute="show_expiration"
/>

<iscomment>define reusable input field and label rendering</iscomment>
<iscomment>
    - indentcheckbox [boolean] for add or not class form-indent to field checkbox
    - targetmsgerror [string] of elementID to append message error (a data attribut 'data-targetmsgerror' will be added to field)
</iscomment>
<ismodule template="util/inputfield.isml"
    name="inputfield"
    attribute="formfield"
    attribute="type"
    attribute="maxlength"
    attribute="size"
    attribute="xhtmlclass"
    attribute="label"
    attribute="value"
    attribute="p_dynamic"
    attribute="attribute1"
    attribute="value1"
    attribute="attribute2"
    attribute="value2"
    attribute="attribute3"
    attribute="value3"
    attribute="requiredtext"
    attribute="wrapper"
    attribute="indentcheckbox"
    attribute="targetmsgerror"
/>

<iscomment>renders a progress indicator for checkout</iscomment>
<ismodule template="checkout/components/checkoutprogressindicator"
    name="checkoutprogressindicator"
    attribute="step"
    attribute="multishipping"
    attribute="rendershipping"/>


<iscomment>renders order totals information</iscomment>
<ismodule template="components/order/ordertotals"
    name="ordertotals"
    attribute="p_lineitemctnr"
    attribute="p_showshipmentinfo"
    attribute="p_shipmenteditable"
    attribute="p_totallabel"
/>

<iscomment>renders order totals information (email)</iscomment>
<ismodule template="components/order/ordertotalsemail"
    name="emailordertotals"
    attribute="p_lineitemctnr"
    attribute="p_showshipmentinfo"
    attribute="p_shipmenteditable"
    attribute="p_totallabel"
/>

<iscomment>renders order details</iscomment>
<ismodule template="components/order/orderdetails"
    name="orderdetails"
    attribute="order"
    attribute="orderstatus"
/>

<iscomment>renders order details (email)</iscomment>
<ismodule template="components/order/orderdetailsemail"
    name="emailorderdetails"
    attribute="order"
    attribute="orderstatus"
/>

<iscomment>renders product compare controls</iscomment>
<ismodule template="product/compare/comparecontrols"
    name="comparecontrols"
    attribute="category"
/>

<iscomment>renders mini lineitems for order summary and mini cart</iscomment>
<ismodule template="checkout/components/minilineitems"
    name="minilineitems"
    attribute="p_lineitemctnr"
    attribute="p_productlineitem"
    attribute="p_giftcertlineitem"
    attribute="p_showreverse"
/>

<iscomment>renders mini lineitems for mini cart</iscomment>
<ismodule template="checkout/components/minicartlineitems"
    name="minicartlineitems"
    attribute="p_lineitemctnr"
    attribute="p_productlineitem"
    attribute="p_giftcertlineitem"
    attribute="p_showreverse"
/>

<iscomment>masks a given string and appends the given number of * in the beginning of the string</iscomment>
<ismodule template="util/mask"
    name="mask"
    attribute="p_string"
    attribute="p_maskchars"
/>

<iscomment>
    Creates the image tag for the product.
    p_productli : the product line item to render
    p_email : a boolean that indicates this is used inside an email template
</iscomment>
<ismodule template="product/components/displayproductimage"
    name="displayproductimage"
    attribute="p_productli"
    attribute="p_email"
/>

<iscomment>
    Displays an approaching discount on the cart page.
    p_approachingdiscount : the approaching discount to render
</iscomment>
<ismodule template="checkout/components/approachingdiscount"
    name="approachingdiscount"
    attribute="p_approachingdiscount"
/>

<iscomment>
    Creates address dropdown list
    p_listId
    p_listAddresses collection
</iscomment>
<ismodule template="account/addressbook/addressselectlist"
    name="addressselectlist"
    attribute="p_listid"
    attribute="p_listaddresses"
/>

<iscomment>
    Render the checkout log event template
    checkoutstep : the checkout step number
    checkoutname : the name of the checkout
</iscomment>
<ismodule template="util/reporting/ReportCheckout"
    name="reportcheckout"
    attribute="checkoutstep"
    attribute="checkoutname"
/>

<iscomment>
    Render the bonus discount line item
    p_alert_text : the alert text for this line item
    p_discount_line_item : the line item
</iscomment>
<ismodule template="checkout/cart/bonusdiscountlineitem"
    name="bonusdiscountlineitem"
    attribute="p_alert_text"
    attribute="p_discount_line_item"
/>

<iscomment>renders given (address) form dynamically</iscomment>
<ismodule
    template="util/dynamicform"
    name="dynamicform"
    attribute="formgroup"
    attribute="dynamicform"
/>
<iscomment>
<ismodule template="util/dynamicform"
    name="dynamicform"
    attribute="formobject"
    attribute="formdata"
/>
</iscomment>

<iscomment>
    Creates a li rendering a product tile in PDP carousel.
    p_product : the product to render
    p_is_current_product : Boolean to know if product is the same than the PDP
</iscomment>
<ismodule template="product/components/collectionproducttile"
    name="collectionproducttile"
    attribute="p_product"
    attribute="p_is_current_product"
/>

<iscomment>
    show/edit packaging option list for a product
</iscomment>
<ismodule template="checkout/components/packagingoptions"
    name="packagingoptions"
    attribute="p_productlineitem"
    attribute="p_productpackaginglineitem"
    attribute="p_packagingproducts"
/>
<iscomment>
    Display the inventory status for a product based on the current country
</iscomment>
<ismodule template="product/components/productavailability"
    name="productavailability"
    attribute="p_product"
/>
<iscomment>
    Display the wishlist button
</iscomment>
<ismodule template="product/components/wishlistbutton"
    name="wishlistbutton"
    attribute="p_divclass"
    attribute="p_pid"
    attribute="p_source"
/>

<iscomment>
    Show the category color refinement
</iscomment>
<ismodule template="components/showcategorycolorrefinement"
    name="showcategorycolorrefinement"
    attribute="p_category"
/>

<ismodule template="components/order/finalordertotals"
    name="finalordertotals"
    attribute="p_lineitemctnr"
/>`;

module.exports = dataFilecomposants;
