<?php

namespace Inspire\Base\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class BaseFormRequest
 * @package Inspire\Base\Http\Requests
 * @copyright 2019 Inspire Group
 * @author hoatq <tqhoa8th@gmail.com
 */
abstract class BaseFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    abstract public function rules();
}