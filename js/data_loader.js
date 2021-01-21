var product_card_tpl=`
<div class="card product-card">
    <div class="card-content">
        <div class="header">«Долина Джентау» в&nbsp;одноразовой таре</div>
        <div class="lr-pair">
            <div class="left">
                <a href="/product.html" class="lazy-image product-image contain" data-src="/img/mirabelle.png"></a>
            </div>
            <div class="right grow">
                <div class="sub-header">Вода питьевая</div>
                <div class="lr-pair table-header">
                    <div class="left">Бутылок</div>
                    <div class="separator grow"></div>
                    <div class="right">Цена</div>
                </div>
                <div class="lr-pair dotted">
                    <div class="left count">1</div>
                    <div class="separator grow"></div>
                    <div class="right price">130₽ *</div>
                </div>
                <div class="lr-pair dotted">
                    <div class="left count">от 2х</div>
                    <div class="separator grow"></div>
                    <div class="right price">120₽ *</div>
                </div>
                <div class="lr-pair dotted">
                    <div class="left count">от 4х</div>
                    <div class="separator grow"></div>
                    <div class="right price">110₽ *</div>
                </div>
                <p class="note">
                    * - при наличии оборотной тары. К обмену принимается тара только от воды из ассортимента нашего магазина.
                </p>
            </div>
        </div>
    </div>
    <div class="separator"></div>
    <form class="card-footer">
        <div class="lr-pair">
            <div class="left grow">
                <div class="add-cart">
                    <div class="plus">
                        <a href="">–</a>
                    </div>
                    <div class="input" contenteditable="true">0</div>
                    <div class="minus">
                        <a href="">+</a>
                    </div>
                </div>
                <input type="hidden" name="product_id" value="1" />
                <input type="hidden" name="count" />
            </div>
            <div class="right">
                <a href="javascript:void(0);" class="btn btn-flat waves-effect waves-dark">Купить</a>
            </div>
        </div>
    </form>
</div>
`

var product_card_tpl2=`
<div class="card product-card">
    <div class="card-content">
        <div class="header">«Долина Джентау» в&nbsp;одноразовой таре</div>
        <div class="lr-pair">
            <div class="left">
                <a href="/product.html" class="lazy-image product-image contain" data-src="/img/mirabelle.png"></a>
            </div>
            <div class="right grow">
                <div class="sub-header">Вода питьевая</div>
                <div class="lr-pair dotted">
                    <div class="left count">Цена</div>
                    <div class="separator grow"></div>
                    <div class="right price">130₽ *</div>
                </div>
            </div>
        </div>
    </div>
    <div class="separator"></div>
    <form class="card-footer">
        <div class="lr-pair">
            <div class="left grow">
                <div class="add-cart">
                    <div class="plus">
                        <a href="">–</a>
                    </div>
                    <div class="input" contenteditable="true">0</div>
                    <div class="minus">
                        <a href="">+</a>
                    </div>
                </div>
                <input type="hidden" name="product_id" value="1" />
                <input type="hidden" name="count" />
            </div>
            <div class="right">
                <a href="javascript:void(0);" class="btn btn-flat waves-effect waves-dark">Купить</a>
            </div>
        </div>
    </form>
</div>
`

var slider_card_tpl = `
<div class="card-wrapper swiper-slide">
`+product_card_tpl+`
</div>
`;

var col_card_tpl = `
<div class="col xl3 l4 m6 s12">
`+product_card_tpl+`
</div>`

var col_card_tpl2 = `
<div class="col xl3 l4 m6 s12">
`+product_card_tpl2+`
</div>`

$(() => {
    fillSlider();
    fillProducts();
})

function fillSlider(){
    for(f=0; f<=14; f++){
        $('#misc-products-container').append(slider_card_tpl);
    }
}

function fillProducts(){

    for(f=0; f<22; f++){
        var colCard = col_card_tpl;
        var colCard2 = col_card_tpl2;

        if(f == 8){
            colCard = colCard.replace("«Долина Джентау» в&nbsp;одноразовой таре", "Горный воздух")
            colCard2 = colCard2.replace("«Долина Джентау» в&nbsp;одноразовой таре", "Горный воздух")
        }

        $('#products').append(colCard);
        $('#products2').append(colCard2);
    }
}