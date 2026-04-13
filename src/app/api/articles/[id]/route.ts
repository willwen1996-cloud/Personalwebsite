import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';

// 获取单篇文章（前台展示）
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const client = getSupabaseClient();
    const { data, error } = await client
      .from('articles')
      .select('*')
      .eq('id', id)
      .maybeSingle();
    
    if (error) throw new Error(`查询失败: ${error.message}`);
    
    if (!data) {
      return NextResponse.json({
        success: false,
        error: '文章不存在'
      }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      data
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 });
  }
}
