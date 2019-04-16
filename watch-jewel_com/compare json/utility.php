<?php
error_reporting(E_ALL);

function RemoveFalseButNotZero($value) {
    return ($value || is_numeric($value) || $value === null );
}

// Function to delete all empty JSON items
function array_filter_recursive($input)
{
    foreach ($input as &$value)
    {
        if (is_array($value))
        {
            $value = array_filter_recursive($value);
        }
    }
    return array_filter($input, 'RemoveFalseButNotZero');
}

function getFileName($type, $language = 'en') {

    return sprintf('dsales_watchjewel_combined_%s_%s.json', $type, $language);
}

$urls = [
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/1',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/2',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/3',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/4',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/5',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/6',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/7',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/8',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/9',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/10',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/11',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/12',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/13',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/14',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/15',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/16',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/17',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/18',
    'https://uwt.dsales.net/services/api/integrations/customer-pricelist/cd788eb9-3b41-4163-9f9d-49d6c588241a/19'
];

$compare = [
    'ParentSKU',
    'Category',
    'Title',
    'Description',
    'Brand',
    //'RRP',
    //'Price',
    //'Stock',
    'SPEC_Large size',
    'SPEC_COLOR',
    'SPEC_SIZE  W x D x H (mm)',
    'SPEC_TYPE ',
    'SPEC_BACKLIGHT',
    'SPEC_SNOOZE FUNCTION',
    'SPEC_RADIO CONTROLLED',
    'SPEC_BATTERY  TYPE',
    'SPEC_WEIGHT  gram',
    'SPEC_OTHERS',
    'SPEC_Model_Name',
    'SPEC_Model Name',
    'SPEC_Family',
    'SPEC_Weight-Gram',
    'SPEC_Type',
    'SPEC_Target_Audience',
    'SPEC_Target_audience',
    'SPEC_Metal',
    'SPEC_Display_Type',
    'SPEC_Jewel_type',
    'SPEC_Color',
    'SPEC_Movement',
    'SPEC_Metal_type',
    'SPEC_Features_1',
    'SPEC_Finish',
    'SPEC_Metal Color',
    'SPEC_Width',
    'SPEC_Features_2',
    'SPEC_Material_type',
    'SPEC_Material_color',
    'SPEC_Features_3',
    'SPEC_Weight',
    'SPEC_Features_4',
    'SPEC_Size',
    'SPEC_Clasp_type',
    'SPEC_Stone',
    'SPEC_Back_finding',
    'SPEC_Features_5',
    'SPEC_Calendar',
    'SPEC_Ring_size',
    'SPEC_Setting',
    'SPEC_Ring_resizable',
    'SPEC_ATM',
    'SPEC_Bullet point 1',
    'SPEC_Bullet point 2',
    'SPEC_Height-cm',
    'SPEC_Case_material',
    'SPEC_Case_Style',
    'SPEC_Length-cm',
    'SPEC_Bullet point 3',
    'SPEC_Bullet point 4',
    'SPEC_Width-cm',
    'SPEC_Case_color',
    'SPEC_Dial_Color',
    'SPEC_Diameter-cm',
    'SPEC_Bullet point 5',
    'SPEC_Gem_shape',
    'SPEC_Band_Material',
    'SPEC_Band_Color',
    'SPEC_Gem_type',
    'SPEC_Diamond_quantity',
    'SPEC_Band_Width_mm',
    'SPEC_Band_Length_cm',
    'SPEC_Total_Diamond_Weight',
    'SPEC_Diamond_color',
    'SPEC_Case_Diameter_mm',
    'SPEC_Case_Width_mm',
    'SPEC_Diamond_clarity',
    'SPEC_Diamond_setting',
    'SPEC_Case_Length_mm',
    'SPEC_Case_Thickness_mm',
    'SPEC_Diamond_shape',
    'SPEC_Gem_Type 2',
    'SPEC_Bezel_Function',
    'SPEC_Bezel_Material_Type',
    'SPEC_Total_Gem_Weight',
    'SPEC_Gem_color',
    'SPEC_Gem_Type',
    'SPEC_Gem_quantity',
    'SPEC_Diamond_Weight_ct',
    'SPEC_Stamp_Type',
    'SPEC_Pearl_type',
    'SPEC_Pearl_color',
    'SPEC_Clasp_Type',
    'SPEC_Weight_g',
    'SPEC_Pearl_size',
    'SPEC_Pearl_shape',
    'SPEC_Dial_Window_Material',
    'SPEC_Extra info',
    'SPEC_Chain Type',
    'SPEC_Battery',
    'SPEC_Necklace_type',
    'SPEC_Charm_shape',
    'SPEC_Box_Length_cm',
    'SPEC_Box Height cm',
    'SPEC_Charm_type',
    'SPEC_Ring type',
    'SPEC_Box Width cm',
    'SPEC_Bracelet_type',
    'SPEC_Product Description',
    'SPEC_Brand Description',
    'Images'
];
