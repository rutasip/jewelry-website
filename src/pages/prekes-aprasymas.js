import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/Layout'
import star from "../assets/star.svg"
import necklace from '../assets/products/3/pexels-mídia-1454169.jpg'

const product = () => {
    return (
        <Layout>
            <section className="product-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product__details__image">
                                <img src={necklace} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <h3>Rankų darbo grandinėlė</h3>
                                <div className="rating">
                                    <img src={star} alt="Star" />
                                    <img src={star} alt="Star" />
                                    <img src={star} alt="Star" />
                                    <img src={star} alt="Star" />
                                    <img src={star} alt="Star" />
                                    <span>( 4 atsiliepimai )</span>
                                </div>
                                <div className="product__details__price">82.0 €</div>
                                <p>Sed consectetur nisi libero, aliquet faucibus ligula luctus quis. Aenean cursus dui vitae venenatis convallis. Sed gravida purus id blandit egestas. Donec mattis quam tincidunt velit mollis, et venenatis leo aliquam.</p>
                                <div className="product__details__button">
                                    <div className="quantity">
                                        <span>Kiekis:</span>
                                        <div className="pro-qty">
                                            <span className="dec qtybtn">-</span>
                                            <input type="text" value="1" />
                                            <span className="inc qtybtn">+</span>
                                        </div>
                                    </div>
                                    <Link to="#" className="cart-btn text-link"> Į krepšelį</Link>
                                </div>
                                <div className="product__details__widget">
                                    <ul>
                                        <li>
                                            <span>Sandėlyje:</span>
                                            <p>5 vnt.</p>
                                        </li>
                                        <li>
                                            <span>Galimos spalvos:</span>
                                            <div className="color__checkbox">
                                                <label for="gold">
                                                    <input type="radio" name="color__radio" id="gold" checked />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label for="silver">
                                                    <input type="radio" name="color__radio" id="silver" />
                                                    <span className="checkmark silver-bg"></span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <span>Galimi dydžiai:</span>
                                            <div className="size__btn">
                                                <label for="s-btn" className="active">
                                                    <input type="radio" id="s-btn" />
                                                    s
                                                </label>
                                                <label for="m-btn">
                                                    <input type="radio" id="m-btn" />
                                                    m
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Aprašymas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Informacija</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Atsiliepimai ( 4 )</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <h6>Aprašymas</h6>
                                        <p>Aliquam erat volutpat. Nulla facilisi. In nec porttitor dolor. Nullam ut hendrerit ligula, et scelerisque felis. Sed ornare diam nec tortor auctor, in porttitor lectus commodo. Sed consectetur nisi libero, aliquet faucibus ligula luctus quis. Aenean cursus dui vitae venenatis convallis. Sed gravida purus id blandit egestas. Donec mattis quam tincidunt velit mollis, et venenatis leo aliquam. Nullam luctus nisl eu nisi vestibulum, eget tempus ligula auctor. Phasellus egestas est ligula, et laoreet arcu dignissim id. </p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                        quis, sem.</p>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <h6>Informacija</h6>
                                        <p>Aliquam erat volutpat. Nulla facilisi. In nec porttitor dolor. Nullam ut hendrerit ligula, et scelerisque felis. Sed ornare diam nec tortor auctor, in porttitor lectus commodo. Sed consectetur nisi libero, aliquet faucibus ligula luctus quis. Aenean cursus dui vitae venenatis convallis. Sed gravida purus id blandit egestas. Donec mattis quam tincidunt velit mollis, et venenatis leo aliquam. Nullam luctus nisl eu nisi vestibulum, eget tempus ligula auctor. Phasellus egestas est ligula, et laoreet arcu dignissim id. </p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                        quis, sem.</p>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <h6>Atsiliepimai ( 4 )</h6>
                                        <p>Aliquam erat volutpat. Nulla facilisi. In nec porttitor dolor. Nullam ut hendrerit ligula, et scelerisque felis. Sed ornare diam nec tortor auctor, in porttitor lectus commodo. Sed consectetur nisi libero, aliquet faucibus ligula luctus quis. Aenean cursus dui vitae venenatis convallis. Sed gravida purus id blandit egestas. Donec mattis quam tincidunt velit mollis, et venenatis leo aliquam. Nullam luctus nisl eu nisi vestibulum, eget tempus ligula auctor. Phasellus egestas est ligula, et laoreet arcu dignissim id. </p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                        quis, sem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default product
