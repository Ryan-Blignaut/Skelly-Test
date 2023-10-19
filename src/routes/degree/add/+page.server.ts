import type { Actions } from './$types';
import type { RequestEvent } from '@sveltejs/kit';
import { db } from '$lib/server/database';
import { data } from 'autoprefixer';
// import { env } from '$env/dynamic/private';

export const actions = {
	default: async (event: RequestEvent) => {
		const formData: FormData = await event.request.formData();

		const url = 'https://api.cloudinary.com/v1_1/dkfshiazu/image/upload';
		const uploadFormData = new FormData();
		uploadFormData.append('upload_preset', 'xtglb5ig');
		uploadFormData.append('api_key', '633393356565488');
		uploadFormData.append('api_secret', '9sQyzUa-st7wl3dclV7MznopCMs');
		// const file = formData.get('file') as File;
		// const fileBase64 = Buffer.from(await file.text(), 'binary').toString('base64');
		uploadFormData.append('file', formData.get('file') as File);
		console.log('start');
		const response = await fetch(url, {
			method: 'POST',
			body: uploadFormData
		}).then((d) => d.json());

		/*const uploadFormData = new FormData();
    uploadFormData.append('upload_preset', 'xtglb5ig');
    uploadFormData.append('source', 'uw');
    uploadFormData.append('api_key', '633393356565488');
    uploadFormData.append('api_secret', '9sQyzUa-st7wl3dclV7MznopCMs');
    const file = formData.get('file') as File;
    console.log(file);
    uploadFormData.append('file', file);

    fetch(url, {
      method: 'POST',
      body: uploadFormData
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });*/
		/*cloudinary.config({
      cloud_name: 'dkfshiazu',
      api_key: '633393356565488',
      api_secret: '9sQyzUa-st7wl3dclV7MznopCMs'
    });
*/
		/*		const file = formData.get('file') as File;
        cloudinary.uploader.upload(formData.get('file'), (err, callResult) => {});
        let file1 = file.stream();
        cloudinary.uploader.upload(file1, options).then(callback);*/
		/*	const formData1 = new FormData();
      formData1.append('file', formData.get('file') as File);
      formData1.append('upload_preset', env.SECRET_CLOUDINARY_PRESET_NAME as string);
      formData1.append('folder', 'turso-blog');
  
      const input = `https://api.cloudinary.com/v1_1/${env.SECRET_CLOUDINARY_CLOUD_NAME}/image/upload`;
      console.log(input);
      const response = await fetch(input, {
        method: 'POST',
        body: formData1,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log('error');
        console.log(`Request failed with status ${response.status}`);
        // Handle non-successful responses, e.g., server error or request failure
        // throw new Error(``);
      }
  */
		console.log('Hello from add degree');

		// const f = formData.get('file') as File;
		const title = formData.get('title');
		const description = formData.get('description');

		const a = response.url??"non";
		// const requirements = formData.get('requirements');
		// TODO: fix this -??
		// const fileText = await f.text();
		// const fileBase64 = Buffer.from(fileText, 'binary').toString('base64');
		const resultSet = await db.execute(
			`INSERT INTO degree (title, description, requirements)
       VALUES ('${title}', '${description}', '${a}')`
		);
		return { success: resultSet.rowsAffected === 1 };
	}
} satisfies Actions;
