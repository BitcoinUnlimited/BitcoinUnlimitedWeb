'use strict';

/*
 * Optionally override the input type with the 'input' property.
 * If 'select' is specified also specify an 'options' parameter.
 *
 * Set labels and descriptions for the create/update form below.
 */
const extraFieldInfo = {
    title: { label: 'Title', placeholder: 'Title', description: 'The title of the post or content.' },
    subtitle: { label: 'Subtitle', placeholder: 'Subtitle', description: 'A small description used in a list view.' },
    name: { label: 'Content Name', description: 'Administrative identifier.' },
    header_img: { label: 'Billboard Image', description: 'This image will go above the post.' },
    caption_editor: { label: 'Billboard Caption', description: 'Displayed under the banner image.', toolbar: 'simplified' },
    upload_file: { label: 'File Upload', description: 'Supported types are: .exe,.zip,.gz,.pdf,.json. The upload will be available from the static files directory.' },
    misc_data: { label: 'Data', description: 'Store JSON data for ad hoc interpretation.' },
    body_editor: { label: 'Content', description: 'This image will go above the post.' },
    created: { label: 'Created Date', description: '' },
    updated: { label: 'Updated Date', description: '' },
    expires: { label: 'Expiration Date', description: 'Set a time limit for this content to be visible.' },
    author: { label: 'Content Author', description: '', optionName: 'displayname' },
    tags: { label: 'Terms', description: 'List terms, separated with commas.' },
    published: { label: 'Publish Content', description: 'Leave unchecked for draft mode.' },
    billboard_img: { label: 'Billboard Image', description: 'This banner image will go behind the title, subtitle and link.' },
    subtitle_editor: { label: 'Subtitle', description: 'A small description or abstract.' },
    urltext: { label: 'Link Title', placeholder: 'URL Title', description: '' },
    url: { label: 'Link', placeholder: 'URL', description: '' },
    pubkey: { label: 'Public BCH or BTC Address', description: '', readonly: true },
    displayname: { label: 'Name, alias or pseudonom', placeholder: 'Display name', description: '' },
    org_title: { label: 'Title or Position', placeholder: '', description: 'This will be visible below the display name' },
    social_media: { label: 'Social media', placeholder: 'Handle', description: '' },
    email: { label: 'Email', description: 'Optionally add your contact email.' },
    icon_img_64: { label: 'User Image', description: 'The image should have an equal height/width and be no greater than 100px wide.' },
    bio_editor:  { label: 'Bio', description: 'A short biography or statement of purpose.' },
    alert_type: { label: 'Alert type', placeholder: 'announce', description: `Set to: 'announce', 'alert' or 'security'. Defaults to announce.`,
        input: 'select', options: { announce: 'Announce', alert: 'Alert', security: 'Security' } },
    message_editor: { label: 'Message', description: 'The content that will be displayed.', toolbar: 'simplified' },
    video_data: { label: 'Video Embed', description: 'Optionally add a video to be placed at the top above the title.' }
}

/**
 * [getModelPropInfo Helper to get a property from extraFieldInfo.]
 * @param  {String} key [Key to get.]
 * @return {String}     [Extra data.]
 */
const getModelPropInfo = key => {
    let { [key]: fieldData } = extraFieldInfo;
    return (fieldData) ? fieldData : false;
}

module.exports = {
    getModelPropInfo
}
