class HomesController < ApplicationController

  def create
    if params["price"].present?
    price = params["price"]
    calculate =  ((Math.sqrt(price.to_f) * 180) - 225) / 360
    value = calculate.modulo(1)
    @res = value * 360
    end
  end
end