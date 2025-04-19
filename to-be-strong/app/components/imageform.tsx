'use client'
import { createClient } from '@/utils/supabase/client';
import React from 'react'

export default async function ImageForm() {
  const supabase = await createClient();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const file = files[0];
	
		if (!file) return;

        const storage = await supabase.storage.from("icon-images");
        const { data, error } = await storage.upload('0', file);
    
        if (error) {
          // TODO アップロードエラーの処理
          console.log(error);
        } else {
          // TODO アップロード成功の処理
    			console.log(data);
    
          // TODO 画像へのurlを使いたい場合
          const url = await supabase.storage.from("icon-images").getPublicUrl('0');
        }
	};
	
	return <input type="file" onChange={handleFileUpload} />
}
