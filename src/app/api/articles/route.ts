import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';

// 获取公开文章列表（前台展示）
export async function GET(request: Request) {
  try {
    const client = getSupabaseClient();
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '10');
    
    const { data, error, count } = await client
      .from('articles')
      .select('id, title, summary, publish_time, tags, source, created_at', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range((page - 1) * pageSize, page * pageSize - 1);
    
    if (error) throw new Error(`查询失败: ${error.message}`);
    
    return NextResponse.json({
      success: true,
      data,
      total: count,
      page,
      pageSize
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : '未知错误'
    }, { status: 500 });
  }
}
