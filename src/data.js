export const getAlphabet = () => {
    let data =
    { A:
   [ { name: 'Afghanistan', code: '+93', iso2: 'AF' },
     { name: 'Aland Islands', code: '+358', iso2: 'AX' },
     { name: 'Albania', code: '+355', iso2: 'AL' },
     { name: 'Algeria', code: '+213', iso2: 'DZ' },
     { name: 'American Samoa', code: '+1684', iso2: 'AS' },
     { name: 'Andorra', code: '+376', iso2: 'AD' },
     { name: 'Angola', code: '+244', iso2: 'AO' },
     { name: 'Anguilla', code: '+1264', iso2: 'AI' },
     { name: 'Antarctica', code: '+672', iso2: 'AQ' },
     { name: 'Antigua and Barbuda', code: '+1268', iso2: 'AG' },
     { name: 'Argentina', code: '+54', iso2: 'AR' },
     { name: 'Armenia', code: '+374', iso2: 'AM' },
     { name: 'Aruba', code: '+297', iso2: 'AW' },
     { name: 'Australia', code: '+61', iso2: 'AU' },
     { name: 'Austria', code: '+43', iso2: 'AT' },
     { name: 'Azerbaijan', code: '+994', iso2: 'AZ' } ],
  B:
   [ { name: 'Bahamas', code: '+1242', iso2: 'BS' },
     { name: 'Bahrain', code: '+973', iso2: 'BH' },
     { name: 'Bangladesh', code: '+880', iso2: 'BD' },
     { name: 'Barbados', code: '+1246', iso2: 'BB' },
     { name: 'Belarus', code: '+375', iso2: 'BY' },
     { name: 'Belgium', code: '+32', iso2: 'BE' },
     { name: 'Belize', code: '+501', iso2: 'BZ' },
     { name: 'Benin', code: '+229', iso2: 'BJ' },
     { name: 'Bermuda', code: '+1441', iso2: 'BM' },
     { name: 'Bhutan', code: '+975', iso2: 'BT' },
     { name: 'Bolivia', code: '+591', iso2: 'BO' },
     { name: 'Bosnia and Herzegovina', code: '+387', iso2: 'BA' },
     { name: 'Botswana', code: '+267', iso2: 'BW' },
     { name: 'Brazil', code: '+55', iso2: 'BR' },
     { name: 'British Indian Ocean Territory', code: '+246', iso2: 'IO' },
     { name: 'Brunei Darussalam', code: '+673', iso2: 'BN' },
     { name: 'Bulgaria', code: '+359', iso2: 'BG' },
     { name: 'Burkina Faso', code: '+226', iso2: 'BF' },
     { name: 'Burundi', code: '+257', iso2: 'BI' } ],
  C:
   [ { name: 'Cambodia', code: '+855', iso2: 'KH' },
     { name: 'Cameroon', code: '+237', iso2: 'CM' },
     { name: 'Canada', code: '+1', iso2: 'CA' },
     { name: 'Cape Verde', code: '+238', iso2: 'CV' },
     { name: 'Cayman Islands', code: '+ 345', iso2: 'KY' },
     { name: 'Central African Republic', code: '+236', iso2: 'CF' },
     { name: 'Chad', code: '+235', iso2: 'TD' },
     { name: 'Chile', code: '+56', iso2: 'CL' },
     { name: 'China', code: '+86', iso2: 'CN' },
     { name: 'Christmas Island', code: '+61', iso2: 'CX' },
     { name: 'Cocos (Keeling) Islands', code: '+61', iso2: 'CC' },
     { name: 'Colombia', code: '+57', iso2: 'CO' },
     { name: 'Comoros', code: '+269', iso2: 'KM' },
     { name: 'Congo', code: '+242', iso2: 'CG' },
     { name: 'Congo, The Democratic Republic of the Congo',
       code: '+243', iso2: 'CD' },
     { name: 'Cook Islands', code: '+682', iso2: 'CK' },
     { name: 'Costa Rica', code: '+506', iso2: 'CR' },
     { name: 'Cote d\'Ivoire', code: '+225', iso2: 'CI' },
     { name: 'Croatia', code: '+385', iso2: 'HR' },
     { name: 'Cuba', code: '+53', iso2: 'CU' },
     { name: 'Cyprus', code: '+357', iso2: 'CY' },
     { name: 'Czech Republic', code: '+420', iso2: 'CZ' } ],
  D:
   [ { name: 'Denmark', code: '+45', iso2: 'DK' },
     { name: 'Djibouti', code: '+253', iso2: 'DJ' },
     { name: 'Dominica', code: '+1767', iso2: 'DM' },
     { name: 'Dominican Republic', code: '+1849', iso2: 'DO' } ],
  E:
   [ { name: 'Ecuador', code: '+593', iso2: 'EC' },
     { name: 'Egypt', code: '+20', iso2: 'EG' },
     { name: 'El Salvador', code: '+503', iso2: 'SV' },
     { name: 'Equatorial Guinea', code: '+240', iso2: 'GQ' },
     { name: 'Eritrea', code: '+291', iso2: 'ER' },
     { name: 'Estonia', code: '+372', iso2: 'EE' },
     { name: 'Ethiopia', code: '+251', iso2: 'ET' } ],
  F:
   [ { name: 'Falkland Islands (Malvinas)', code: '+500', iso2: 'FK' },
     { name: 'Faroe Islands', code: '+298', iso2: 'FO' },
     { name: 'Fiji', code: '+679', iso2: 'FJ' },
     { name: 'Finland', code: '+358', iso2: 'FI' },
     { name: 'France', code: '+33', iso2: 'FR' },
     { name: 'French Guiana', code: '+594', iso2: 'GF' },
     { name: 'French Polynesia', code: '+689', iso2: 'PF' } ],
  G:
   [ { name: 'Gabon', code: '+241', iso2: 'GA' },
     { name: 'Gambia', code: '+220', iso2: 'GM' },
     { name: 'Georgia', code: '+995', iso2: 'GE' },
     { name: 'Germany', code: '+49', iso2: 'DE' },
     { name: 'Ghana', code: '+233', iso2: 'GH' },
     { name: 'Gibraltar', code: '+350', iso2: 'GI' },
     { name: 'Greece', code: '+30', iso2: 'GR' },
     { name: 'Greenland', code: '+299', iso2: 'GL' },
     { name: 'Grenada', code: '+1473', iso2: 'GD' },
     { name: 'Guadeloupe', code: '+590', iso2: 'GP' },
     { name: 'Guam', code: '+1671', iso2: 'GU' },
     { name: 'Guatemala', code: '+502', iso2: 'GT' },
     { name: 'Guernsey', code: '+44', iso2: 'GG' },
     { name: 'Guinea', code: '+224', iso2: 'GN' },
     { name: 'Guinea-Bissau', code: '+245', iso2: 'GW' },
     { name: 'Guyana', code: '+595', iso2: 'GY' } ],
  H:
   [ { name: 'Haiti', code: '+509', iso2: 'HT' },
     { name: 'Holy See (Vatican City State)', code: '+379', iso2: 'VA' },
     { name: 'Honduras', code: '+504', iso2: 'HN' },
     { name: 'Hong Kong', code: '+852', iso2: 'HK' },
     { name: 'Hungary', code: '+36', iso2: 'HU' } ],
  I:
   [ { name: 'Iceland', code: '+354', iso2: 'IS' },
     { name: 'India', code: '+91', iso2: 'IN' },
     { name: 'Indonesia', code: '+62', iso2: 'ID' },
     { name: 'Iran, Islamic Republic of Persian Gulf', code: '+98', iso2: 'IR' },
     { name: 'Iraq', code: '+964', iso2: 'IQ' },
     { name: 'Ireland', code: '+353', iso2: 'IE' },
     { name: 'Isle of Man', code: '+44', iso2: 'IM' },
     { name: 'Israel', code: '+972', iso2: 'IL' },
     { name: 'Italy', code: '+39', iso2: 'IT' } ],
  J:
   [ { name: 'Jamaica', code: '+1876', iso2: 'JM' },
     { name: 'Japan', code: '+81', iso2: 'JP' },
     { name: 'Jersey', code: '+44', iso2: 'JE' },
     { name: 'Jordan', code: '+962', iso2: 'JO' } ],
  K:
   [ { name: 'Kazakhstan', code: '+77', iso2: 'KZ' },
     { name: 'Kenya', code: '+254', iso2: 'KE' },
     { name: 'Kiribati', code: '+686', iso2: 'KI' },
     { name: 'Korea, Democratic People\'s Republic of Korea', iso2: 'KP',
       code: '+850' },
     { name: 'Korea, Republic of South Korea', code: '+82', iso2: 'KR' },
     { name: 'Kuwait', code: '+965', iso2: 'KW' },
     { name: 'Kyrgyzstan', code: '+996', iso2: 'KG' } ],
  L:
   [ { name: 'Laos', code: '+856', iso2: 'LA' },
     { name: 'Latvia', code: '+371', iso2: 'LV' },
     { name: 'Lebanon', code: '+961', iso2: 'LB' },
     { name: 'Lesotho', code: '+266', iso2: 'LS' },
     { name: 'Liberia', code: '+231', iso2: 'LR' },
     { name: 'Libyan Arab Jamahiriya', code: '+218', iso2: 'LY' },
     { name: 'Liechtenstein', code: '+423', iso2: 'LI' },
     { name: 'Lithuania', code: '+370', iso2: 'LT' },
     { name: 'Luxembourg', code: '+352', iso2: 'LU' } ],
  M:
   [ { name: 'Macao', code: '+853', iso2: 'MO' },
     { name: 'Macedonia', code: '+389', iso2: 'MK' },
     { name: 'Madagascar', code: '+261', iso2: 'MG' },
     { name: 'Malawi', code: '+265', iso2: 'MW' },
     { name: 'Malaysia', code: '+60', iso2: 'MY' },
     { name: 'Maldives', code: '+960', iso2: 'MV' },
     { name: 'Mali', code: '+223', iso2: 'ML' },
     { name: 'Malta', code: '+356', iso2: 'MT' },
     { name: 'Marshall Islands', code: '+692', iso2: 'MH' },
     { name: 'Martinique', code: '+596', iso2: 'MQ' },
     { name: 'Mauritania', code: '+222', iso2: 'MR' },
     { name: 'Mauritius', code: '+230', iso2: 'MU' },
     { name: 'Mayotte', code: '+262', iso2: 'YT' },
     { name: 'Mexico', code: '+52', iso2: 'MX' },
     { name: 'Micronesia, Federated States of Micronesia',
       code: '+691', iso2: 'FM' },
     { name: 'Moldova', code: '+373', iso2: 'MD' },
     { name: 'Monaco', code: '+377', iso2: 'MC' },
     { name: 'Mongolia', code: '+976', iso2: 'MN' },
     { name: 'Montenegro', code: '+382', iso2: 'ME' },
     { name: 'Montserrat', code: '+1664', iso2: 'MS' },
     { name: 'Morocco', code: '+212', iso2: 'MA' },
     { name: 'Mozambique', code: '+258', iso2: 'MZ' },
     { name: 'Myanmar', code: '+95', iso2: 'MM' } ],
  N:
   [ { name: 'Namibia', code: '+264', iso2: 'NA' },
     { name: 'Nauru', code: '+674', iso2: 'NR' },
     { name: 'Nepal', code: '+977', iso2: 'NP' },
     { name: 'Netherlands', code: '+31', iso2: 'NL' },
     { name: 'Netherlands Antilles', code: '+599', iso2: 'AN' },
     { name: 'New Caledonia', code: '+687', iso2: 'NC' },
     { name: 'New Zealand', code: '+64', iso2: 'NZ' },
     { name: 'Nicaragua', code: '+505', iso2: 'NI' },
     { name: 'Niger', code: '+227', iso2: 'NE' },
     { name: 'Nigeria', code: '+234', iso2: 'NG' },
     { name: 'Niue', code: '+683', iso2: 'NU' },
     { name: 'Norfolk Island', code: '+672', iso2: 'NF' },
     { name: 'Northern Mariana Islands', code: '+1670', iso2: 'MP' },
     { name: 'Norway', code: '+47', iso2: 'NO' } ],
  O: [ { name: 'Oman', code: '+968', iso2: 'OM' } ],
  P:
   [ { name: 'Pakistan', code: '+92', iso2: 'PK' },
     { name: 'Palau', code: '+680', iso2: 'PW' },
     { name: 'Palestinian Territory, Occupied', code: '+970', iso2: 'PS' },
     { name: 'Panama', code: '+507', iso2: 'PA' },
     { name: 'Papua New Guinea', code: '+675', iso2: 'PG' },
     { name: 'Paraguay', code: '+595', iso2: 'PY' },
     { name: 'Peru', code: '+51', iso2: 'PE' },
     { name: 'Philippines', code: '+63', iso2: 'PH' },
     { name: 'Pitcairn', code: '+872', iso2: 'PN' },
     { name: 'Poland', code: '+48', iso2: 'PL' },
     { name: 'Portugal', code: '+351', iso2: 'PT' },
     { name: 'Puerto Rico', code: '+1939', iso2: 'PR' } ],
  Q: [ { name: 'Qatar', code: '+974', iso2: 'QA' } ],
  R:
   [ { name: 'Reunion', code: '+262', iso2: 'RE' },
     { name: 'Romania', code: '+40', iso2: 'RO' },
     { name: 'Russia', code: '+7', iso2: 'RU' },
     { name: 'Rwanda', code: '+250', iso2: 'RW' } ],
  S:
   [ { name: 'Saint Barthelemy', code: '+590', iso2: 'BL' },
     { name: 'Saint Helena', code: '+290', iso2: 'SH' },
     { name: 'Saint Kitts and Nevis', code: '+1869', iso2: 'KN' },
     { name: 'Saint Lucia', code: '+1758', iso2: 'LC' },
     { name: 'Saint Martin', code: '+590', iso2: 'MF' },
     { name: 'Saint Pierre and Miquelon', code: '+508', iso2: 'PM' },
     { name: 'Saint Vincent and the Grenadines', code: '+1784', iso2: 'VC' },
     { name: 'Samoa', code: '+685', iso2: 'WS' },
     { name: 'San Marino', code: '+378', iso2: 'SM' },
     { name: 'Sao Tome and Principe', code: '+239', iso2: 'ST' },
     { name: 'Saudi Arabia', code: '+966', iso2: 'SA' },
     { name: 'Senegal', code: '+221', iso2: 'SN' },
     { name: 'Serbia', code: '+381', iso2: 'RS' },
     { name: 'Seychelles', code: '+248', iso2: 'SC' },
     { name: 'Sierra Leone', code: '+232', iso2: 'SL' },
     { name: 'Singapore', code: '+65', iso2: 'SG' },
     { name: 'Slovakia', code: '+421', iso2: 'SK' },
     { name: 'Slovenia', code: '+386', iso2: 'SI' },
     { name: 'Solomon Islands', code: '+677', iso2: 'SB' },
     { name: 'Somalia', code: '+252', iso2: 'SO' },
     { name: 'South Africa', code: '+27', iso2: 'ZA' },
     { name: 'South Georgia and the South Sandwich Islands',
       code: '+500', iso2: 'GS' },
     { name: 'South Sudan', code: '+211', iso2: 'SS' },
     { name: 'Spain', code: '+34', iso2: 'ES' },
     { name: 'Sri Lanka', code: '+94', iso2: 'LK' },
     { name: 'Sudan', code: '+249', iso2: 'SD' },
     { name: 'Suriname', code: '+597', iso2: 'SR' },
     { name: 'Svalbard and Jan Mayen', code: '+47', iso2: 'SJ' },
     { name: 'Swaziland', code: '+268', iso2: 'SZ' },
     { name: 'Sweden', code: '+46', iso2: 'SE' },
     { name: 'Switzerland', code: '+41', iso2: 'CH' },
     { name: 'Syrian Arab Republic', code: '+963', iso2: 'SY' } ],
  T:
   [ { name: 'Taiwan', code: '+886', iso2: 'TW' },
     { name: 'Tajikistan', code: '+992', iso2: 'TJ' },
     { name: 'Tanzania, United Republic of Tanzania', code: '+255', iso2: 'TZ' },
     { name: 'Thailand', code: '+66', iso2: 'TH' },
     { name: 'Timor-Leste', code: '+670', iso2: 'TL' },
     { name: 'Togo', code: '+228', iso2: 'TG' },
     { name: 'Tokelau', code: '+690', iso2: 'TK' },
     { name: 'Tonga', code: '+676', iso2: 'TO' },
     { name: 'Trinidad and Tobago', code: '+1868', iso2: 'TT' },
     { name: 'Tunisia', code: '+216', iso2: 'TN' },
     { name: 'Turkey', code: '+90', iso2: 'TR' },
     { name: 'Turkmenistan', code: '+993', iso2: 'TM' },
     { name: 'Turks and Caicos Islands', code: '+1649', iso2: 'TC' },
     { name: 'Tuvalu', code: '+688', iso2: 'TV' } ],
  U:
   [ { name: 'Uganda', code: '+256', iso2: 'UG' },
     { name: 'Ukraine', code: '+380', iso2: 'UA' },
     { name: 'United Arab Emirates', code: '+971', iso2: 'AE' },
     { name: 'United Kingdom', code: '+44', iso2: 'GB' },
     { name: 'United States', code: '+1', iso2: 'US' },
     { name: 'Uruguay', code: '+598', iso2: 'UY' },
     { name: 'Uzbekistan', code: '+998', iso2: 'UZ' } ],
  V:
   [ { name: 'Vanuatu', code: '+678', iso2: 'VU' },
     { name: 'Venezuela', code: '+58', iso2: 'VE' },
     { name: 'Vietnam', code: '+84', iso2: 'VN' },
     { name: 'Virgin Islands, British', code: '+1284', iso2: 'VG' },
     { name: 'Virgin Islands, U.S.', code: '+1340', iso2: 'VI' } ],
  W: [ { name: 'Wallis and Futuna', code: '+681', iso2: 'WF' } ],
  Y: [ { name: 'Yemen', code: '+967', iso2: 'YE' } ],
  Z:
   [ { name: 'Zambia', code: '+260', iso2: 'ZM' },
     { name: 'Zimbabwe', code: '+263', iso2: 'ZW' } ] }
  return data
}
